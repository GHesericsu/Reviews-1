const sampleData = {
  roomId: '6',
  overall: '3.6',
  otherStars: {
    cleanliness: '3.3',
    accuracy: '3.6',
    communication: '3.5',
    location: '3.4',
    checkin: '3.4',
    value: '3.5',
  },
  reviews: [
    {
      id: 1977,
      name: 'Justyn Jerde',
      imageUrl: 'https://airbnbavatars.s3-us-west-1.amazonaws.com/avatarImages/aa2.png',
      createdAt: '2020-05-20T04:38:49.000Z',
      content: 'Hic hic consectetur omnis incidunt. Dolor accusamus nihil rerum sit. Dignissimos aut et incidunt optio odio accusantium labore nemo.',
    },
    {
      id: 1194,
      name: 'Guiseppe Cremin',
      imageUrl: 'https://airbnbavatars.s3-us-west-1.amazonaws.com/avatarImages/aa7.png',
      createdAt: '2020-05-04T22:51:48.000Z',
      content: 'Nihil ratione enim a doloribus commodi est omnis. Nostrum asperiores deserunt dolorem culpa. Blanditiis a labore repellat laborum. Corporis dolore unde quisquam dolorem sunt necessitatibus. Omnis atque doloribus rem dolores dicta accusantium voluptatem nobis perferendis. Beatae ut eveniet at.',
    },
    {
      id: 422,
      name: 'Odell Feeney',
      imageUrl: 'https://airbnbavatars.s3-us-west-1.amazonaws.com/avatarImages/aa22.png',
      createdAt: '2020-04-03T18:43:07.000Z',
      content: 'Voluptatibus nihil ad pariatur. Ut veniam laboriosam dolores. Ut exercitationem qui sit. Similique ut corporis officiis eligendi vitae possimus et eos animi. Beatae suscipit natus eius nesciunt explicabo inventore. Cumque sint facere minus et eveniet voluptas.',
    },
    {
      id: 1573,
      name: 'Hoyt Cummerata',
      imageUrl: 'https://airbnbavatars.s3-us-west-1.amazonaws.com/avatarImages/aa25.png',
      createdAt: '2020-02-14T01:05:22.000Z',
      content: 'Reiciendis odit velit eos numquam aut ut ut suscipit. Atque necessitatibus fuga inventore sit sit rerum voluptas placeat. Et eaque eius reiciendis est natus modi ea. Et ex veritatis enim et assumenda et labore. Saepe pariatur ex omnis sed nesciunt a iusto.',
    },
    {
      id: 2450,
      name: 'Hoyt Schoen',
      imageUrl: 'https://airbnbavatars.s3-us-west-1.amazonaws.com/avatarImages/aa25.png',
      createdAt: '2019-11-02T21:00:27.000Z',
      content: 'Itaque deserunt rerum recusandae itaque impedit harum illum cupiditate. Dolore ducimus deleniti maxime perferendis fuga doloremque tenetur. Ex modi est sunt voluptas et deleniti quam deleniti quaerat. Qui non cupiditate dolorem occaecati voluptatem. Sequi in ab quia cumque eos sapiente. Aperiam placeat veniam reprehenderit.',
    },
    {
      id: 2154,
      name: 'Mohamed Heller',
      imageUrl: 'https://airbnbavatars.s3-us-west-1.amazonaws.com/avatarImages/aa18.png',
      createdAt: '2019-09-01T15:37:47.000Z',
      content: 'Nihil libero sint repellendus itaque architecto et eos mollitia sequi. Recusandae ipsa ea quia. Natus corporis ab qui quas repellat sunt. Vero ab sunt unde placeat velit sint voluptatem et unde. Ipsum rem quam suscipit.',
    },
    {
      id: 2077,
      name: 'Ebony Dooley',
      imageUrl: 'https://airbnbavatars.s3-us-west-1.amazonaws.com/avatarImages/aa9.png',
      createdAt: '2019-04-29T07:54:25.000Z',
      content: 'Est rerum et. Vitae nam quo a est ea et laborum error. Ut amet et dicta hic porro omnis consequatur. Aut quo distinctio veritatis aut sit. In accusamus tempora sit.',
    },
    {
      id: 1816,
      name: 'Kariane Adams',
      imageUrl: 'https://airbnbavatars.s3-us-west-1.amazonaws.com/avatarImages/aa23.png',
      createdAt: '2019-04-04T21:08:03.000Z',
      content: 'Harum illum alias maxime. Rerum qui nisi. Amet rerum necessitatibus ullam a quis eius eos recusandae.',
    },
    {
      id: 1672,
      name: 'Brown Gulgowski',
      imageUrl: 'https://airbnbavatars.s3-us-west-1.amazonaws.com/avatarImages/aa18.png',
      createdAt: '2019-01-07T01:25:11.000Z',
      content: 'Omnis rerum aut. Quis doloribus sunt ut voluptas quod. Natus vel qui quis sit. Impedit porro aspernatur commodi. Ut sed hic quo. Aliquam quis tempora dolores ut sit vel et. Aut omnis quam consequatur voluptatem odit ullam aut odit nam.',
    },
    {
      id: 2338,
      name: 'Alexzander Labadie',
      imageUrl: 'https://airbnbavatars.s3-us-west-1.amazonaws.com/avatarImages/aa3.png',
      createdAt: '2018-07-14T09:11:37.000Z',
      content: 'Consequatur facere sequi tempora cumque itaque. Id ut optio consequatur molestiae accusamus architecto. Consequatur impedit sequi numquam sit quod occaecati praesentium exercitationem. Eveniet nam ea saepe et quis natus.',
    },
    {
      id: 2268,
      name: 'Mr. Joshua Jenkins',
      imageUrl: 'https://airbnbavatars.s3-us-west-1.amazonaws.com/avatarImages/aa15.png',
      createdAt: '2018-07-10T19:29:27.000Z',
      content: 'Aut sunt quia voluptate expedita. Minima et sit mollitia accusamus quibusdam facilis ea. Ipsam cumque voluptatibus sit voluptas explicabo. Et nihil ut cumque quo ut nostrum. Ad voluptas qui. Laudantium blanditiis ullam. Quis vero ab. Provident vero et veritatis.',
    },
    {
      id: 2054,
      name: 'Jane Terry',
      imageUrl: 'https://airbnbavatars.s3-us-west-1.amazonaws.com/avatarImages/aa14.png',
      createdAt: '2018-05-03T02:09:15.000Z',
      content: 'Quisquam sequi aliquid necessitatibus. Occaecati laudantium ut quia laboriosam fugit et aliquam magnam et. Distinctio magnam debitis velit. Consequuntur vel distinctio autem esse id voluptas voluptas cupiditate.',
    },
    {
      id: 1446,
      name: 'Brayan Stroman',
      imageUrl: 'https://airbnbavatars.s3-us-west-1.amazonaws.com/avatarImages/aa5.png',
      createdAt: '2018-04-26T04:40:32.000Z',
      content: 'In at mollitia praesentium sed at illum et voluptatem. Aut facilis rem in id alias non. Asperiores non labore odit consequuntur ea a voluptas. Modi eos iure saepe at similique aspernatur. Laboriosam sit praesentium laborum qui ullam repellat non. Nemo similique eum minus ipsum quod. Nostrum eum error ipsam labore dolores aliquam eveniet ea facere.',
    },
    {
      id: 918,
      name: 'Bret Turcotte',
      imageUrl: 'https://airbnbavatars.s3-us-west-1.amazonaws.com/avatarImages/aa4.png',
      createdAt: '2017-11-26T19:22:00.000Z',
      content: 'Modi id corporis excepturi maiores dolor harum. Et sit facilis commodi ut minima. Repellat beatae quibusdam ducimus et. Et fugiat mollitia nihil beatae reiciendis voluptatem. Exercitationem ut eum aliquid odio est. Magni repellat laboriosam ut et sunt consequatur eum soluta aut.',
    },
    {
      id: 543,
      name: 'Tavares Bogan Sr.',
      imageUrl: 'https://airbnbavatars.s3-us-west-1.amazonaws.com/avatarImages/aa7.png',
      createdAt: '2017-08-08T19:20:36.000Z',
      content: 'Commodi animi id debitis sit. Voluptas praesentium ullam. Nesciunt et quae quia quia voluptas ea. Cupiditate omnis aspernatur quis nihil consequuntur autem. Tempora id dolores repellat dignissimos omnis. Accusamus qui harum minima voluptatem. Ipsa consequuntur ratione itaque nam et ipsum. Eaque voluptatem tenetur consequuntur earum consequuntur recusandae non doloribus.',
    },
    {
      id: 445,
      name: 'Mavis Klein',
      imageUrl: 'https://airbnbavatars.s3-us-west-1.amazonaws.com/avatarImages/aa8.png',
      createdAt: '2017-05-21T16:52:16.000Z',
      content: 'Aspernatur optio sit aut. Adipisci minima in libero aliquid ipsam. Rem excepturi exercitationem et. Aut nemo aut qui in vitae.',
    },
    {
      id: 1768,
      name: 'Mrs. Arvel Bosco',
      imageUrl: 'https://airbnbavatars.s3-us-west-1.amazonaws.com/avatarImages/aa19.png',
      createdAt: '2017-04-05T10:31:23.000Z',
      content: 'Dolorem suscipit earum tempore et distinctio et culpa nihil neque. Dicta quisquam quae suscipit provident ut et iste. Culpa corrupti voluptas neque velit atque numquam. Voluptatibus porro quos architecto ab et nobis est dicta. Soluta est natus inventore autem nam saepe consequuntur. Et omnis sit dolorem sed. Et quia laborum impedit. Ut perferendis est quidem autem animi. Deserunt sed doloribus necessitatibus.',
    },
    {
      id: 1903,
      name: 'Albert Kuphal IV',
      imageUrl: 'https://airbnbavatars.s3-us-west-1.amazonaws.com/avatarImages/aa19.png',
      createdAt: '2017-02-25T13:09:17.000Z',
      content: 'Quo qui enim. Rerum amet et aliquid quis esse aut dolores provident. Pariatur repellendus ea. Minima voluptatem quas sit omnis. Ipsum voluptate ut non. Suscipit voluptas autem animi voluptate soluta consequatur.',
    },
    {
      id: 1360,
      name: 'Jayce Jones',
      imageUrl: 'https://airbnbavatars.s3-us-west-1.amazonaws.com/avatarImages/aa12.png',
      createdAt: '2016-12-10T16:35:08.000Z',
      content: 'Sunt ut et excepturi. Hic voluptatum fuga dolorum corporis soluta dolor molestias a. Aperiam assumenda laudantium. Voluptatum et mollitia dolorem magni maxime veniam dolorum dolorem et. Et possimus praesentium doloribus consequatur quasi corrupti rem dolore et. Odit consequatur reiciendis laborum quis sed repellendus. Iste necessitatibus voluptatem ipsum qui voluptatum voluptatum error odit illo. Quis quia cumque quis sed sit ea rem rerum.',
    },
    {
      id: 384,
      name: 'Abagail Wilderman',
      imageUrl: 'https://airbnbavatars.s3-us-west-1.amazonaws.com/avatarImages/aa8.png',
      createdAt: '2016-09-24T02:58:34.000Z',
      content: 'Quo omnis dignissimos provident unde ratione tenetur necessitatibus omnis. Est eum iure expedita ipsa aut odio dolorem accusamus.',
    },
    {
      id: 1499,
      name: 'Sandy Rowe',
      imageUrl: 'https://airbnbavatars.s3-us-west-1.amazonaws.com/avatarImages/aa22.png',
      createdAt: '2016-07-10T11:48:52.000Z',
      content: 'Tenetur ea sunt numquam ea quae quaerat consequatur. Voluptas beatae dolorum soluta impedit quasi aut atque ut. Consequatur fuga eos culpa.',
    },
    {
      id: 1560,
      name: 'Nigel Dach',
      imageUrl: 'https://airbnbavatars.s3-us-west-1.amazonaws.com/avatarImages/aa22.png',
      createdAt: '2016-07-08T21:53:28.000Z',
      content: 'Aspernatur voluptas ut omnis et mollitia. Sit ipsam et. Quae consectetur vel ipsum enim ut aut molestiae enim. Quo illo esse qui et dolores aut est beatae id. Ad maxime doloribus perferendis nisi expedita. Unde ab corporis iure. Natus deleniti delectus et sunt excepturi velit distinctio. Earum omnis laborum voluptatem. Necessitatibus eos mollitia autem perferendis sunt et ut.',
    },
    {
      id: 1375,
      name: 'Amaya Maggio',
      imageUrl: 'https://airbnbavatars.s3-us-west-1.amazonaws.com/avatarImages/aa24.png',
      createdAt: '2016-06-02T13:51:35.000Z',
      content: 'Aut maiores vel. Voluptatem libero autem quas modi rerum sapiente at eligendi quibusdam. Ipsam vitae reprehenderit quisquam praesentium dolores. Optio quaerat aliquam dolores omnis corporis molestias. Ipsum qui qui fugiat id aut explicabo dolores delectus eos. Quia rerum dolor autem dicta corrupti sed. Expedita sint ex sit. Odio quia eveniet. Maxime enim aliquid nulla.',
    },
    {
      id: 502,
      name: 'Palma Brakus II',
      imageUrl: 'https://airbnbavatars.s3-us-west-1.amazonaws.com/avatarImages/aa14.png',
      createdAt: '2016-02-18T14:00:07.000Z',
      content: 'Nostrum enim exercitationem. Nam facilis iure odio. Sed nam sunt aperiam id earum non. Labore facere corporis. Animi voluptas fugiat. Deleniti voluptatum aut dolorem velit. Ipsa doloremque facere aut.',
    },
    {
      id: 1557,
      name: 'Madonna Grant',
      imageUrl: 'https://airbnbavatars.s3-us-west-1.amazonaws.com/avatarImages/aa14.png',
      createdAt: '2016-02-10T09:23:39.000Z',
      content: 'Atque voluptatum assumenda quibusdam officiis inventore fugit illo at facere. Incidunt fugiat aut nulla omnis ut sed molestiae eum voluptates. Est eum sit fuga laboriosam. Illo a dolorum esse sit voluptas ut.',
    },
    {
      id: 1754,
      name: 'Erik Funk',
      imageUrl: 'https://airbnbavatars.s3-us-west-1.amazonaws.com/avatarImages/aa5.png',
      createdAt: '2015-12-08T04:32:59.000Z',
      content: 'Rerum delectus autem et. In quia sunt labore. Quia sequi praesentium non dolores veritatis eveniet nihil.',
    },
    {
      id: 1976,
      name: 'Maurine Olson',
      imageUrl: 'https://airbnbavatars.s3-us-west-1.amazonaws.com/avatarImages/aa4.png',
      createdAt: '2015-07-19T18:01:32.000Z',
      content: 'Possimus aut est. Qui neque officiis. Sed et reiciendis sapiente doloremque veniam et consequatur cum fugit. Accusamus cumque qui ea repellendus rerum saepe et esse. Libero atque ullam id numquam consequuntur deserunt mollitia. Sed eos unde soluta facere corporis quam aut. Vel dignissimos pariatur aut iure praesentium.',
    },
    {
      id: 1699,
      name: 'Lucio Wiegand DDS',
      imageUrl: 'https://airbnbavatars.s3-us-west-1.amazonaws.com/avatarImages/aa4.png',
      createdAt: '2015-06-18T04:10:13.000Z',
      content: 'Quod autem iure fuga modi eos quod deserunt ut. Dignissimos illo laborum necessitatibus dolores est rerum dolorem.',
    },
    {
      id: 1126,
      name: 'Kevon Zulauf',
      imageUrl: 'https://airbnbavatars.s3-us-west-1.amazonaws.com/avatarImages/aa18.png',
      createdAt: '2015-05-27T21:23:31.000Z',
      content: 'Blanditiis odit fugiat nulla quos. Ut veritatis asperiores odit maxime illo totam consequuntur necessitatibus voluptatibus. Eos impedit voluptas nulla architecto sit vitae quasi. Cumque qui eum eum.',
    },
    {
      id: 2495,
      name: 'Elza Leffler',
      imageUrl: 'https://airbnbavatars.s3-us-west-1.amazonaws.com/avatarImages/aa1.png',
      createdAt: '2015-01-05T18:55:48.000Z',
      content: 'Vitae quia hic unde et. Cumque possimus eum et. Assumenda occaecati velit odit. Excepturi cum dicta aut ut quasi aspernatur omnis. Corrupti et aut nisi voluptatum molestias at recusandae. Laudantium nesciunt sed soluta non quis. Et non harum ad.',
    },
  ],
};

module.exports = { sampleData };
