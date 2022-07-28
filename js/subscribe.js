
const submitButton = document.querySelector(".form__btn");

submitButton.addEventListener("click", postForm);



async function postForm (event) {
    event.preventDefault();
    const submitEmail = document.querySelector(".textfield");

    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify({
                email: newsletterEmail.value,
            }),
        });
        const responseText = await response.text();
        console.log(responseText); 
}
postForm()