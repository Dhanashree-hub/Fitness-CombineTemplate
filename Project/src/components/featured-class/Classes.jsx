const cardStyles = `relative h-72 w-full cursor-pointer overflow-hidden after:absolute after:left-[-25px] after:top-20 after:z-10 after:h-16 after:w-28 after:rotate-[30deg] after:rounded-r-full after:bg-white/30 after:bg-[length:40px] after:bg-[70%] after:bg-no-repeat after:transition-all hover:after:bg-white group`;

const bgStyles = `h-full w-full 
bg-cover bg-center grayscale transition-all duration-700 group-hover:scale-150 group-hover:grayscale-0`;

function Classes() {
  return (
    <div className="mt-12 grid grid-cols-1 gap-5 text-left 3xl:grid-cols-4">
      {/* Cycling */}
      <div
        className={`${cardStyles} after:bg-[url('./images/featured-class/cycleyellow.png')] hover:after:bg-[url('./images/featured-class/cycleyellow1.png')] 3xl:col-span-2`}
      >
        <div
          className={`${bgStyles} bg-[url('./images/featured-class/cycling.webp')]`}
        ></div>
        <div className="absolute bottom-0 z-10 mb-5 ml-5 cursor-text space-y-2">
          <h4 className="text-3xl font-bold text-white">Cycling</h4>
          <p className="bg-yellow-500 px-3 py-0.5 text-black">Wednesday: 9:00am-10:00am</p>
        </div>
      </div>

      {/* Karate */}
      <div
        className={`${cardStyles} after:bg-[url('./images/featured-class/karatewhite.png')] hover:after:bg-[url('./images/featured-class/karateyellow.png')]`}
      >
        <div
          className={`${bgStyles} bg-[url('./images/featured-class/karate.webp')]`}
        ></div>
        <div className="absolute bottom-0 z-10 mb-5 ml-5 cursor-text space-y-2">
          <h4 className="text-3xl font-bold  text-white">Karate</h4>
          <p className="whitespace-nowrap bg-yellow-500 px-3 py-0.5 text-black">
            Friday: 10:00am-11:00am
          </p>
        </div>
      </div>

      {/* Power */}
      <div
        className={`${cardStyles} after:bg-[url('./images/featured-class/dumbelhandwhite.png')] hover:after:bg-[url('./images/featured-class/dumbelhand.png')]`}
      >
        <div
          className={`${bgStyles} bg-[url('./images/featured-class/power.webp')]`}
        ></div>
        <div className="absolute bottom-0 z-10 mb-5 ml-5 cursor-text space-y-2">
          <h4 className="text-3xl font-bold  text-white">Power</h4>
          <p className="whitespace-nowrap bg-yellow-500 px-3 py-0.5  text-black">
            Saturday: 9:00am-10:00am
          </p>
        </div>
      </div>

      {/* Meditation */}
      <div
        className={`${cardStyles} after:bg-[url('./images/featured-class/meditationwhite.png')] hover:after:bg-[url('./images/featured-class/meditation.png')]`}
      >
        <div
          className={`${bgStyles} bg-[url('./images/featured-class/meditation.webp')]`}
        ></div>
        <div className="absolute bottom-0 z-10 mb-5 ml-5 cursor-text space-y-2 ">
          <h4 className="text-3xl font-bold  text-white">Meditation</h4>
          <p className="whitespace-nowrap bg-yellow-500 px-3 py-0.5  text-black">
            Friday: 1:00pm-2:00pm
          </p>
        </div>
      </div>

      {/* Martial Arts */}
      <div
        className={`${cardStyles} after:bg-[url('./images/featured-class/martialwhite.png')] hover:after:bg-[url('./images/featured-class/martial.png')]`}
      >
        <div
          className={`${bgStyles} bg-[url('./images/featured-class/martial-arts.webp')]`}
        ></div>
        <div className="absolute bottom-0 z-10 mb-5 ml-5 cursor-text space-y-2 ">
          <h4 className="text-3xl font-bold  text-white">Martial Arts</h4>
          <p className="whitespace-nowrap bg-yellow-500 px-3 py-0.5  text-black">
            Sunday: 6:00pm-7:00pm
          </p>
        </div>
      </div>

      {/* Workout */}
      <div
        className={`${cardStyles} after:bg-[url('./images/featured-class/workoutgirlwhite.png')] hover:after:bg-[url('./images/featured-class/workoutgirl.png')] 3xl:col-span-2`}
      >
        <div
          className={`${bgStyles} bg-[url('./images/featured-class/workout.webp')]`}
        ></div>
        <div className="absolute bottom-0 z-10 mb-5 ml-5 cursor-text space-y-2">
          <h4 className="text-3xl font-bold  text-white">Workout</h4>
          <p className="bg-yellow-500 px-3 py-0.5  text-black">Monday: 4:00pm-5:00pm</p>
        </div>
      </div>
    </div>
  );
}

export default Classes;
