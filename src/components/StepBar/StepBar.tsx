import { useSelector } from "react-redux";

const StepBar = () => {
  const { nextStep } = useSelector((state: any) => state.portfolio);
  const totalSteps = 5;

  return (
    <div className="completed my-8">
      {/* Stepper Nav */}
      <ul className="relative flex flex-row gap-x-2">
        {Array.from({ length: totalSteps }, (_, index) => {
          const stepIndex = index + 1;
          return (
            <li
              key={stepIndex}
              className={`flex items-center gap-x-2 shrink basis-0 flex-1 group ${
                nextStep >= stepIndex ? "success" : ""
              }`}
            >
              <span className="min-w-7 min-h-7 group inline-flex items-center text-xs align-middle focus:outline-none disabled:opacity-50 disabled:pointer-events-none">
                <span
                  className={`size-7 flex justify-center items-center shrink-0  font-medium text-gray-800 rounded-full group-focus:bg-gray-200 ${
                    nextStep === stepIndex
                      ? "bg-buttonPrimary text-white"
                      : "bg-gray-100"
                  } ${
                    nextStep > stepIndex
                      ? "bg-buttonPrimary group-focus:bg-teal-600"
                      : ""
                  }`}
                >
                  <span
                    className={`${nextStep > stepIndex ? "hidden" : ""} ${
                      nextStep === stepIndex ? "text-white" : "text-gray-600"
                    }`}
                  >
                    {stepIndex}
                  </span>
                  {nextStep > stepIndex && (
                    <svg
                      className="shrink-0 size-3"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  )}
                </span>
              </span>
              <div
                className={`w-full h-px flex-1 bg-gray-200 ${
                  nextStep > stepIndex ? "bg-teal-600" : ""
                }`}
              ></div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default StepBar;
