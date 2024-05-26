const { AINews } = require('@chaingpt/ainews');

const ainews = new AINews({
  apiKey: '7fe82afd-50be-48e9-80dd-1ac4e77caa8d',
});

async function main() {
  const response = await ainews.getNews({categoaryId:[0]});
  console.log(response.data);
}

main();
