import { CardPost } from "@/components/CardPost";
import logger from "@/logger";
import styles from "./page.module.css";

async function getAllPost() {
	const response = await fetch('http://localhost:3042/posts')
	if (!response.ok) {
		logger.error('Ops, alguma coisa ocorreu mal.');
		return [];
	}
	logger.info('Posts obtidos com sucesso.')
	return await response.json();
}

export default async function Home() {
	const posts = await getAllPost();
	return (
		<main className={styles.grid}>
			{
				posts.map(post => (
					<CardPost key={post.id} post={post} />
				)) 
			}
		</main>
	);
}
