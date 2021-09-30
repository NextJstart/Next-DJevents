import Link from 'next/link';
import Image from 'next/image';
import { FaPencilAlt, FaTimes } from 'react-icons/fa';
import Layout from '@/components/Layout';
import { API_URL } from '@/config/index';
import styles from '@/styles/Event.module.css';

export default function Event({ ev }) {
	const deleteEvent = oneEvent => {
		console.log('delete', oneEvent);
	};

	return (
		<Layout>
			<div className={styles.event}>
				<div className={styles.controls}>
					<Link href={`/events/edit/${ev.id}`}>
						<a>
							<FaPencilAlt /> Edit Event
						</a>
					</Link>
					<a href='#' className={styles.delete} onClick={deleteEvent}>
						<FaTimes /> Delete Event
					</a>
				</div>
				<span>
					{ev.date} at {ev.time}
				</span>
				<h1>{ev.name}</h1>
				{ev.image && (
					<div className={styles.image}>
						<Image src={ev.image} width={960} height={600} />
					</div>
				)}
				<h3>Performers:</h3>
				<p>{ev.performers}</p>
				<h3>Description:</h3>
				<p>{ev.description}</p>
				<h3>Venue: {ev.venue}</h3>
				<p>{ev.address}</p>

				<Link href='/events'>
					<a className={styles.back}>{'<'} Go Back</a>
				</Link>
			</div>
		</Layout>
	);
}

export async function getStaticPaths() {
	const res = await fetch(`${API_URL}/api/events`);
	const events = await res.json();

	const paths = events.map(ev => ({
		params: { slug: ev.slug }
	}));

	return {
		paths,
		fallback: true
	};
}

export async function getStaticProps({ params: { slug } }) {
	const res = await fetch(`${API_URL}/api/events/${slug}`);
	const events = await res.json();

	return {
		props: {
			ev: events[0]
		},
		revalidate: 1
	};
}
