const dankChamber = {
  title: 'Dank Chamber',
  image: 'image',
  description: 'This dank chamber smells of the dankest dank.',
  items: [],
  doors: {
    s: 'greatHall'
  },
  use(item) {
    if(item.key === 'violin') {
      const bird = this.items.find(item => item.key === 'bird');

      if(!bird) return;
    }
  }
};

const treasure = {
  title: 'room name',
  image: 'image',
  description: 'string',
  items: [],
  doors: {
    s: 'greatHall'
  }
};

export const Rooms = {
  treasure
};

export const start = dankChamber;