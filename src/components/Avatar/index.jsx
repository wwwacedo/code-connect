import Image from 'next/image'
import React from 'react'
import styles from './avatar.module.css'

export default function Avatar({ name, imageSrc }) {
	return (
		<ul className={styles.avatar}>
			<li>
				<Image src={imageSrc} alt={`Avatar do(a) ${name}`} width={32} height={32}/>
			</li>
			<li>
				@{name}
			</li>
		</ul>
	)
}
