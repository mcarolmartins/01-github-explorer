import { useState, useEffect } from "react";
import { RepositoryItem } from "./RepositoryItem";

import '../styles/repositories.scss';

interface Repository {
  name: string;
  description: string;
  html_url: string;
}

export function RepositoryList() {
  const [ repositories, setRepositories ] = useState<Repository[]>([]);

  //se passar a dependência do useEffect vazia, ele será executado
  //apenas uma única vez, assim que ele é carregado.
  useEffect(() => {
    fetch('https://api.github.com/users/mcarolmartins/repos')
    .then(response => response.json())
    .then(data => setRepositories(data));
  }, []);

  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        {repositories.map(repository => {
          return <RepositoryItem key={repository.name} repository={repository}/>
        })}

      </ul>

    </section>
  );
}