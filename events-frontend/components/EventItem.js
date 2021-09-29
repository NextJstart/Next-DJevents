import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/EventItem.module.css';

export default function EventItem({ ev }) {
	return (
		<div className={styles.event}>
			<div className={styles.img}>
				<Image
					src={ev.image ? ev.image : '/images/event-default.png'}
					width={170}
					height={100}
				/>
			</div>

			<div className={styles.info}>
				<span>
					{ev.date} at {ev.time}
				</span>
				<h3>{ev.name}</h3>
			</div>

			<div className={styles.link}>
				<Link href={`/events/${ev.slug}`}>
					<a className='btn'>Details</a>
				</Link>
			</div>
		</div>
	);
}
