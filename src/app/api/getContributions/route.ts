import { NextApiRequest, NextApiResponse } from 'next'
import { Octokit } from '@octokit/core'

export async function GET(request: Request, res: Response) {
  const octokit = new Octokit({
    auth: process.env.GITHUB_TOKEN
  })

  const { data } = await octokit.request('GET /repos/{owner}/{repo}/commits', {
    owner: 'dpaulos6',
    repo: 'portfolio'
  })

  // const filteredRepos = data.filter(
  //   (repo) => repo.permissions?.pull && repo.owner.login !== 'dpaulos6'
  // )

  if (data) {
    return Response.json(data)
  }
}
