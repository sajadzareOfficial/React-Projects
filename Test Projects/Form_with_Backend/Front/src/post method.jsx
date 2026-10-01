export default async function postData(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    const data = {
        name: formData.get("userName"),
        family: formData.get("userFamily"),
        password: formData.get("password")
    };

    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    };

    console.log(data);

    const response = await fetch(
        "http://localhost:5184/UserInfo",
        options
    );
    if(response.status ==200){
      alert("form is posted succsesfull")
    }
    else{
      alert("somhing went wrong")
    }
    console.log(response.status);
}