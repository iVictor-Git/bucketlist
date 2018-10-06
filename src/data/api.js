import Data from './_Data'

export const getBucketLists = () => new Promise((resolve, reject) => {
  const probability = Math.random() * 100;
  const waitTime = Math.random() * 2000
  setTimeout(() => {
    probability < 10 ? reject('Something went wrong') : resolve(Data)
  }, waitTime)
})