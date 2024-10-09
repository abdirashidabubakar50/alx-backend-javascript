export default function createInt8TypedArray(length, position, value) {
  /* *returns a new ArrayBUffer with Int8 value at a specific location */
  const buffer = new ArrayBuffer(length);

  // create a Dataview for the ArrayBuffer
  const view = new DataView(buffer);
  // check if position is vaild otherwise throw an error
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }

  // set  the int8 value ar the specified position
  view.setInt8(position, value);

  // Return the DataView for the  ArrayBuffer
  return view;
}
