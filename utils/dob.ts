export function getDob(dob: string) {
  const dobMilliseconds = Date.parse(dob)
  const currentMilliseconds = Date.now()
  const ageMilliseconds = currentMilliseconds - dobMilliseconds
  const ageYears = new Date(ageMilliseconds).getUTCFullYear() - 1970
  return ageYears
}
