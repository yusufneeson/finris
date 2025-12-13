import { users } from '@RSV/db/schema';
import { google } from '@RSV/lib/auth/google';
import { createSessionToken } from '@RSV/lib/auth/session';
import { db } from '@RSV/lib/db';
import { ArcticFetchError, decodeIdToken, OAuth2RequestError } from 'arctic';
import { cookies } from 'next/headers';
import { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
    try {
        const cookieStore = await cookies();
        const code = request.nextUrl.searchParams.get('code') as string;
        const codeVerifier = cookieStore.get('rsv_google_auth_code_verifier')
            ?.value as string;

        const tokens = await google.validateAuthorizationCode(
            code,
            codeVerifier
        );

        const idToken = tokens.idToken();
        const idTokenClaims = decodeIdToken(idToken) as {
            sub: string;
            email: string;
            email_verified: boolean;
            name: string;
            picture: string;
            given_name: string;
            family_name: string;
            locale: string;
        };

        console.log('---------');
        console.log(idTokenClaims);
        console.log('---------');

        const existingUser = await db.query.users.findFirst({
            where: {
                googleId: idTokenClaims.sub,
            },
        });

        let userId: number = 0;
        if (!existingUser) {
            const newUser = await db
                .insert(users)
                .values({
                    googleId: idTokenClaims.sub,
                    email: idTokenClaims.email,
                    name: idTokenClaims.name,
                })
                .returning({
                    id: users.id,
                });

            userId = newUser[0].id;
            console.log('New user created:', newUser);
        } else {
            userId = existingUser.id;
        }

        await createSessionToken(userId);

        return Response.redirect(new URL('/', request.url));
    } catch (error) {
        if (error instanceof OAuth2RequestError) {
            console.error(error);
        }
        if (error instanceof ArcticFetchError) {
            console.error(error);
        }

        console.error('------ UNKNOWN ERROR ------');
        console.error(error);
        console.error('------ END OF ERROR ------');

        return Response.json({ error: 'An error occurred' }, { status: 500 });
    }
}
