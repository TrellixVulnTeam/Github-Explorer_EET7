import { RepositoryItem } from './RepositoryItem';
import { useState, useEffect } from 'react';
import '../styles/repositories.scss';

// https://api.github.com/users/galvaolucas/repos

interface Repository { 
    name: string;
    description: string;
    html_url: string;
}

export function RepositoryList(){
    
    const [repositories, setRepositories] = useState<Repository[]>([])
    
    // chamada API usando o useEffect
    useEffect(() => {
        fetch('https://api.github.com/users/galvaolucas/repos')
        .then(response => response.json())
        .then(data => setRepositories(data))}, []);

    return (
        <section className='repository-list'>
            <h1>Lista de Repositórios</h1>

            <ul>
            {/* sempre usar key junto ao map */}
            {repositories.map(repository => {
                return < RepositoryItem key={repository.name} repository={repository} />
            })}
             
            </ul>
        </section>
    );
}