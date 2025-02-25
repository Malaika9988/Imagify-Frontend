import { useState } from "react";
import art from "../assets/art.png";

const BuyCredit = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const plans = [
    {
      id: "basic",
      name: "Basic",
      price: 10,
      description: "Best for personal use",
      credits: "50 credits",
    },
    {
      id: "advanced",
      name: "Advanced",
      price: 25,
      description: "Best for business use",
      credits: "150 credits",
    },
    {
      id: "business",
      name: "Business",
      price: 50,
      description: "Best for enterprise use",
      credits: "Unlimited credits",
    },
  ];

  const handleSelect = (planId) => {
    setSelectedPlan(planId);
  };

  return (
    <div className="min-h-[80vh] text-center pt-14 mb-10">
      <button className="border border-gray-400 px-10 py-2 rounded-full mb-6 hover:bg-gray-200 transition">
        Our Plans
      </button>
      <h1 className="text-center text-3xl font-medium mb-6 sm:mb-10">
        Choose the Plan
      </h1>
      <div className="flex flex-wrap justify-center gap-6">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className="border border-gray-300 rounded-lg shadow-lg p-6 w-72 hover:shadow-2xl transition transform hover:scale-105"
          >
            {/* Logo at the top */}
            <img src={art} alt="Plan Logo" className="w-16 h-16 mx-auto mb-4" />
            <h2 className="text-xl font-semibold mb-2">{plan.name}</h2>
            <p className="text-gray-500 text-sm mb-4 italic">
              {plan.description}
            </p>
            <p className="text-gray-700 text-lg mb-2 font-medium">
              ${plan.price}
            </p>
            <p className="text-gray-600 mb-4">{plan.credits}</p>
            <button
              className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition"
              id={plan.id}
              onClick={() => handleSelect(plan.id)}
            >
              {selectedPlan === plan.id ? "Purchase" : "Select Plan"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BuyCredit;

