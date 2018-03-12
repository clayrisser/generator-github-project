export default async function configuring(yo) {
  if (!yo.options.destination) {
    yo.destinationRoot(yo.context.destination);
  }
}
