import { faker } from "@faker-js/faker"
import { PrismaClient } from "@prisma/client"

import { type Item } from "@/types"

/* HELLO MONZER. This the file where you tell prisma orm (which acts as a temporary database) to use information made up by NPM faker. This way you don't spend time faking realistic information. Also you can just change it out when you have real info from your database */

const prisma = new PrismaClient()

// const createItem = (): Item => {
//   return {
//     id: faker.string.uuid(),
//     name: faker.lorem.word({
//       length: { min: 5, max: 10 },
//       strategy: "closest",
//     }),
//     slug: faker.lorem.slug(10),
//   }
// }

const createItem = () => {
  return {
    id: faker.lorem.word({
      length: {
      max: 5,
      min: 10
    },
    strategy: "closest"
  }),
  slug: faker.lorem.slug(10)
}
}
// async function main() {
//   await prisma.bucket.create({
//     data: {
//       title: "First bucket",
//       description: "My bucket description",
//       status: "draft",
//     },
//   })

//   const publishedBucket = await prisma.bucket.create({
//     data: {
//       title: "Second bucket",
//       description: "My second bucket description",
//       status: "published",
//     },
//   })

//   const items = Array(10).fill(null).map(createItem)

//   for (const item of items) {
//     await prisma.item.create({
//       data: {
//         ...item,
//         bucket: {
//           connect: {
//             id: publishedBucket.id,
//           },
//         },
//       },
//     })
//   }
// }

async function main() {
  await prisma.bucket.create({
    data: {
      title: "Min tittel",
      description: "Beskrivelseeeeeee",
      status: "draft",
    }
  })

const items = Array(10).fill(null).map(createItem)

for (const item of Items){
  await prisma.item.create({
    data: { ...item},
  })
  }
}



main().catch((err) => {
  console.error("Failed seed", err)
})
