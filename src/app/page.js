import { CardPost } from "@/components/CardPost";
import logger from "@/logger";
import styles from "./page.module.css";
import Link from "next/link";

async function getAllPost(page) {
	const response = await fetch(`http://localhost:3042/posts?_page=${page}&_per_page=6`)
	if (!response.ok) {
		logger.error('Ops, alguma coisa ocorreu mal.');
		return [];
	}
	logger.info('Posts obtidos com sucesso.')
	return await response.json();
}

export default async function Home({ searchParams }) {
	const currentPage = searchParams?.page || 1;
	const { data: posts, prev, next } = await getAllPost(currentPage);
	return (
		<main className={styles.grid}>
			{
				posts.map(post => (
					<CardPost key={post.id} post={post} />
				))
			}
			<div className={styles.links}>
				{prev && <Link href={`/?page=${prev}`}>Página anterior</Link>}
				{next && <Link href={`/?page=${next}`}>Próxima página</Link>}
			</div>
		</main>
	);
}
