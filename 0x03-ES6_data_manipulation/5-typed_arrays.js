export default function createInt8TypedArray(len, pos, val) {
  const buf = new ArrayBuffer(len);
  const view = new DataView(buf, 0);

  if (pos > len - 1) throw Error('Position outside range');

  view.setInt8(pos, val);

  return view;
}
