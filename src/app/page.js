import ChooseTable from "../components/ChooseTable";

export default function Home() {
  return (
    <main className="w-full h-screen overflow-hidden">
      {/* <div className="bg-red-400 w-[20rem] absolute translate-y-1/2 top-1/2 mr-auto left-0 right-0 ml-auto ">
        <ChooseTable />
      </div> */}
      <div className="fixed left-1/2 top-1/2 -translate-x-1/2 w-[20rem] ">
        <ChooseTable />
      </div>
      <video
        autoPlay
        loop
        muted
        className="absolute top-18 left-0 w-full  object-cover -z-10"
      >
        <source
          src="https://res.cloudinary.com/da8jnpdza/video/upload/v1715048134/8523306-hd_1280_720_30fps_f301py.mp4"
          type="video/mp4"
        />
      </video>
    </main>
  );
}
