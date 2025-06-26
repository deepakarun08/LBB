export default function StatsBanner() {
  return (
    <section className="bg-[#f7a580] py-10">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between text-white space-y-6 md:space-y-0">
        {/* Left Content */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold leading-tight">
            The World’s Largest <br />
            Therapy Service <br />
            <span className="text-xl font-semibold">100% Online & Offline.</span>
          </h2>
        </div>

        {/* Stats */}
        <div className="flex flex-col sm:flex-row gap-8 text-center">
          <div>
            <p className="text-2xl font-bold">2000+</p>
            <p className="text-sm">Happy Customer</p>
          </div>
          <div>
            <p className="text-2xl font-bold">10000+</p>
            <p className="text-sm">Online therapy Session</p>
          </div>
          <div>
            <p className="text-2xl font-bold">20000+</p>
            <p className="text-sm">Online Assessments till date</p>
          </div>
        </div>
      </div>
    </section>
  );
}
