import React from "react";

const steps = [
  {
    number: 1,
    title: "Consultation & Site Survey",
    description: "We visit your home to assess roof space and energy needs.",
  },
  {
    number: 2,
    title: "Design & Proposal",
    description:
      "We design a custom solar system, maximizing roof space and energy output.",
  },
  {
    number: 3,
    title: "Professional Installation",
    description:
      "Our experts install your solar panels with minimal disruption to your routine.",
  },
];

const SolarInstallationProcess = () => {
  return (
    <section className="bg-gradient-to-b from-green-900 to-lime-500 py-16 px-4">
      <div className="max-w-6xl mx-auto text-center text-white">
        {/* Header */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Our Solar Panel Installation Process
        </h2>
        <p className="text-base md:text-lg mb-12 max-w-2xl mx-auto">
          We follow a simple 3-step process to deliver efficient and
          high-quality solar panel installations tailored to your needs.
        </p>

        {/* Steps */}
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.number}
              className="group bg-white rounded-2xl p-6 shadow-lg transition hover:scale-105 hover:shadow-2xl duration-300"
            >
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 bg-gradient-to-tr from-green-600 to-lime-400 text-white rounded-full flex items-center justify-center text-xl font-bold shadow-lg transition transform group-hover:rotate-12">
                  {step.number}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-green-900 mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-gray-700">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <p className="mt-12 text-sm sm:text-base">
          Ready to go solar? Get a custom quote today! Call us at{" "}
          <span className="text-yellow-300 font-semibold">
            (+91) 9067734445
          </span>
          .
        </p>
      </div>
    </section>
  );
};

export default SolarInstallationProcess;
