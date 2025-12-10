export function formatRupiah(cents: bigint) : string {
  const abs = cents < 0n ? -cents : cents;
  const rupiah = abs / 100n;
  const sen = abs % 100n;
  const sign = cents < 0n ? "-" : "";

  const formatted = Intl.NumberFormat("id-ID").format(rupiah);
  const senStr = sen.toString().padStart(2, "0");

  return `${sign}${formatted},${senStr}`
}
