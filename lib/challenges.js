import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const challengesDirectory = path.join(process.cwd(), 'lib', 'published-challenges')

export function getAllChallengeIds() {
  const publishedFiles = fs.readdirSync(challengesDirectory)

  return publishedFiles.map(fileName => {
    return {
      params: {
        id: fileName.replace(/\.yaml$/, '')
      }
    }
  })
}

export function getChallengeData(id) {
  const fullPath = path.join(challengesDirectory, `${id}.yaml`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  const matterResult = matter(fileContents)

  return {
    id,
    ...matterResult.data
  }
}
