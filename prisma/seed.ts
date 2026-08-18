import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3"
import { PrismaClient } from "@prisma/client"
import therapists from "../data/therapists.json"

const adapter = new PrismaBetterSqlite3({ url: "file:./prisma/dev.db" })
const prisma = new PrismaClient({ adapter })

async function main() {
  await prisma.therapist.deleteMany()

  for (const t of therapists) {
    await prisma.therapist.create({
      data: {
        name: t.name,
        gender: t.gender,
        ethnicity: t.ethnicity,
        languages: JSON.stringify(t.languages),
        faithBackground: t.faithBackground,
        agesServedMin: t.agesServedMin,
        agesServedMax: t.agesServedMax,
        specialties: JSON.stringify(t.specialties),
        modalities: JSON.stringify(t.modalities),
        personality: JSON.stringify(t.personality),
        sessionFormats: JSON.stringify(t.sessionFormats),
        insurances: JSON.stringify(t.insurances),
        availability: JSON.stringify(t.availability),
        acceptingNewPatients: t.acceptingNewPatients,
        bio: t.bio,
      },
    })
  }

  const count = await prisma.therapist.count()
  console.log(`Seeded ${count} therapists.`)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
