export function updateObjectInArray<ObjectShape>(
	initialArray: ObjectShape[],
	key: keyof ObjectShape,
	value: ObjectShape[keyof ObjectShape],
	patch: Partial<ObjectShape>
): ObjectShape[] | null {
	const copyArray: ObjectShape[] = initialArray.map(el =>( {...el}));
	const indexForUpdate: number = copyArray.findIndex((el) => el[key] === value);
    if (indexForUpdate === -1)
        return null;
	copyArray[indexForUpdate] = {
        ...copyArray[indexForUpdate],
        ...patch
    }
	return copyArray;
}
