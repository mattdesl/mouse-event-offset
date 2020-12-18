declare module 'mouse-event-offset' {
	import type { MouseEvent, TouchEvent } from 'react';

	export default function offset(e: MouseEvent | TouchEvent): [number, number];
}
