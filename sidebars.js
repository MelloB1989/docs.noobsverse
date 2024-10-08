const sidebars = {
// By default, Docusaurus generates a sidebar from the docs folder structure
  //tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],
  karmapay: [
    {
      type: "category",
      label: "Introduction to Karmapay",
      items: ["karmapay/karmapay"],
    },
    {
      type: "category",
      label: "How KarmaPay Works?",
      items: ["karmapay/working/workflow"],
    },
    {
      type: "category",
      label: "Getting started with Karmapay",
      items: [
        "karmapay/getting-started/account-setup",
        "karmapay/getting-started/razorpay",
        "karmapay/getting-started/phonepe",
        "karmapay/getting-started/stripe",
      ],
    },
    {
      type: "category",
      label: "API Documentation",
      items: ["karmapay/api-documentation/create-order"],
    },
  ],

  healthKareAI: [
    {
      type: "category",
      label: "HealthKareAI User APIs",
      items: [
        "HealthKareAI/User-App/login",
        "HealthKareAI/User-App/register",
        "HealthKareAI/User-App/updateUserDetails",
        "HealthKareAI/User-App/verifyOTP",
        "HealthKareAI/User-App/createNotification",
        "HealthKareAI/User-App/getNotifications",
      ],
    },
    {
      type: "category",
      label: "HealthKareAI Clinic APIs",
      items: [
        "HealthKareAI/Clinic-App/clinic/create",
        "HealthKareAI/Clinic-App/clinic/update",
        "HealthKareAI/Clinic-App/clinic/get",
      ],
    },
    {
      type: "category",
      label: "HealthKareAI User-Family APIs",
      items: [
        "HealthKareAI/User-App/family/addUserToFamily",
        "HealthKareAI/User-App/family/createFamily",
        "HealthKareAI/User-App/family/getFamilyAppointments",
        "HealthKareAI/User-App/family/getFamilyMembers",
        "HealthKareAI/User-App/family/getFamilyPrescriptions",
        "HealthKareAI/User-App/family/updateFamilyMemberDetails",
        "HealthKareAI/User-App/family/getFamilyMemberDetails",
        "HealthKareAI/User-App/family/getAllFamilyMemberDetails",
        "HealthKareAI/User-App/family/updateFamilyClinic",
      ],
    },
    {
      type: "category",
      label: "Doctor APIs",
      items: [
        "HealthKareAI/Clinic-App/doctor/login",
        "HealthKareAI/Clinic-App/doctor/register",
        "HealthKareAI/Clinic-App/doctor/verifyOTP",
      ],
    },
    {
      type: "category",
      label: "Hospital APIs",
      items: [
        "HealthKareAI/Clinic-App/hospital/login",
        "HealthKareAI/Clinic-App/hospital/register",
        "HealthKareAI/Clinic-App/hospital/verifyOTP",
        "HealthKareAI/Clinic-App/hospital/getDetails",
      ],
    },
    {
      type: "category",
      label: "Prescription APIs",
      items: [
        "HealthKareAI/Clinic-App/prescriptions/create",
        "HealthKareAI/Clinic-App/prescriptions/getPrescriptionsList",
        "HealthKareAI/Clinic-App/prescriptions/update",
      ],
    },
    {
      type: "category",
      label: "Appointments APIs",
      items: [
        "HealthKareAI/Clinic-App/appointments/create",
        "HealthKareAI/Clinic-App/appointments/getAppointmentsList",
        "HealthKareAI/Clinic-App/appointments/update",
      ],
    },
    {
      type: "category",
      label: "Error Codes",
      items: ["HealthKareAI/error_codes"],
    },
  ],

  ev_backend: [
    {
      type: "category",
      label: "AUTH APIs",
      items: ["EV/auth/login", "EV/auth/verifyOTP", "EV/auth/signup"],
    },
    {
      type: "category",
      label: "Station APIs",
      items: [
        "EV/stations/createStations",
        "EV/stations/getAllStations",
        "EV/stations/getClosestStations",
        "EV/stations/getStation",
      ],
    },
    {
      type: "category",
      label: "Bike APIs",
      items: [
        "EV/bikes/createBikes",
        "EV/bikes/getAllBikes",
        "EV/bikes/getBikeByFrameNumber",
        "EV/bikes/getBikeByStationID",
        "EV/bikes/getBikesByID",
        "EV/bikes/getBikesByTopSpeedGT",
        "EV/bikes/getBikesByTopSpeedLT",
        "EV/bikes/GetBikesByTopSpeedRange",
        "EV/bikes/getFastestBike",
      ],
    },
    {
      type: "category",
      label: "Wallet APIs",
      items: ["EV/wallet/getBalance", "EV/wallet/topup", "EV/wallet/webhook"],
    },
    {
      type: "category",
      label: "User APIs",
      items: ["EV/user/getDetails"],
    },
  ],
  avidia: [
    {
      type: "category",
      label: "Cohorts",
      items: ["Avidia/cohorts"],
    },
    {
      type: "category",
      label: "Quizzes",
      items: ["Avidia/quizzes"],
    },
  ],
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

export default sidebars;
