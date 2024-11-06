const getVisitors = async () => {
  try {
    const response = await fetch(
      "https://8pmzwsym5d.execute-api.us-east-1.amazonaws.com/default/getCount",
      {
        method: "GET",
      },
    );
    const data = await response.json();
    document.getElementById("visitors").innerHTML = data["count"];
    return data;
  } catch (e) {
    console.log("error in fetching view count", e);
  }
};

const visitors = getVisitors();
