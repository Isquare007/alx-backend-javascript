import ClassRoom from './0-classroom';

function initializeRooms() {
  const sizes = [19, 20, 34];
  const classSize = [];

  for (const size of sizes) {
    const room = new ClassRoom(size);
    classSize.push(room);
  }
  return classSize;
}

export default initializeRooms;
