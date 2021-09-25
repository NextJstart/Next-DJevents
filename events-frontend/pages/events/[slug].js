import { useRouter } from 'next/router';

export default function Event() {
	const router = useRouter();

	console.log(router);

	return (
		<div>
			<h1>Single Event</h1>
			<h3>{router.query.slug}</h3>
			<button onClick={() => router.push('/')}>Click to redirect</button>
		</div>
	);
}
