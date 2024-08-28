
export const option = {
  tooltip: {
    trigger: 'item'
  },
  legend: {
    left: 'center',
    bottom: '-5%',
    left: 'center',
    itemWidth: 14, 
    itemHeight: 14, 
    padding: [10, 0], 
    textStyle: {
      color: '#333', 
      fontSize: 14,
    },
    itemStyle: {
      borderRadius: 20
    },
    
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: ['50%', '70%'], // Outer and inner radius of the pie chart
      avoidLabelOverlap: false,
      itemStyle: {
        borderRadius: 6,
        borderWidth: 2,
        borderColor: 'rgba(19, 25, 34, 1)'
      },
      label: {
        show: false,
        position: 'center'
      },
      emphasis: {
        label: {
          show: true,
          fontSize: 40,
          fontWeight: 'bold'
        }
      },
      labelLine: {
        show: false
      },
      data: [
        { 
          value: 70, 
          name: 'Total',
          itemStyle: {
            color: '#6122B3' // Highlight color for larger segment
          }
        },
        { 
          value: 30, 
          name: 'Free',
          itemStyle: {
            color: '#C92D78' // Color for smaller segment
          }
        }
      ]
    }
  ]
};

export const DASHBOARD_TABLE = [
  {treatment: "Men's Hormonal Health (Rescript)", date: "16 Mar, 2024", stage: "Doctor Consultations"},
  {treatment: "Men's Hormonal Health (Refill)", date: "16 Mar, 2024", stage: "Completed"},
  {treatment: "Men's Hormonal Health", date: "16 Mar, 2024", stage: "Completed"}
];

export const DASHBOARD_TABLE_MEDICINE = [
  {product: "Open", started: "16 Mar, 2024", runs_out: "Doctor Consultations", reorder_on: "sd", refills:"dsd", started2: "ww"},
  {product: "Open", started: "16 Mar, 2024", runs_out: "Doctor Consultations", reorder_on: "sd", refills:"dsd", started2: "we"},
  {product: "Open", started: "16 Mar, 2024", runs_out: "Doctor Consultations", reorder_on: "sd", refills:"dsd", started2: "we"},
  {product: "Open", started: "16 Mar, 2024", runs_out: "Doctor Consultations", reorder_on: "sd", refills:"dsd", started2: "we"},
  {product: "Open", started: "16 Mar, 2024", runs_out: "Doctor Consultations", reorder_on: "sd", refills:"dsd", started2: "we"},
];

export const DASHBOARD_TABLE_MESSAGES = [
  {status: "Open", created_on: "  12 Apr, 2024", form: "Doctor", subject: "Additional Information Requested"},
  {status: "Open", created_on: "  12 Apr, 2024", form: "Consultant", subject: "Fortuity Test Results"},
  {status: "Open", created_on: "  12 Apr, 2024", form: "Admin", subject: "Additional Questions"},
];