function answer(choice){
    if(choice === 'B'){
        localStorage.setItem("result", "You are an Overthinker. You wait too much before speaking.");
    } else {
        localStorage.setItem("result", "You may have other issues, but overthinking is key.");
    }
    window.location.href = "result.html";
}
