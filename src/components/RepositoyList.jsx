import { RepositoryItem } from "./RepositoryItem";

const repository = {
  name: 'unform',
  description: 'description',
  link: 'https://github.com/mcarolmartins/nlw-4-node'
}

export function RepositoryList() {
  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>
      <ul>
        <RepositoryItem repository={repository}/>
        <RepositoryItem repository={repository}/>
        <RepositoryItem repository={repository}/>
      </ul>

    </section>
  );
}