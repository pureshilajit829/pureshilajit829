function showContent(contentType) {
    const createdContent = document.getElementById("createdContent");
    const savedContent = document.getElementById("savedContent");
  
    if (contentType === "created") {
      createdContent.style.display = "block";
      savedContent.style.display = "none";
    } else {
      createdContent.style.display = "none";
      savedContent.style.display = "block";
    }
  }
  