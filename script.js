document.addEventListener("DOMContentLoaded", function () {
  const leftSection = document.getElementById("leftSection");
  const toggleButton = document.getElementById("toggleButton");
  const closeButton = document.getElementById("closeButton");
  const expandedContent = document.getElementById("expandedContent");
  const shrunkContent = document.getElementById("shrunkContent");
  let closeButtonTimeout;

  // Button to expand the section
  toggleButton.addEventListener("click", function () {
    leftSection.classList.add("open");
    leftSection.classList.remove("collapsed");
    toggleButton.classList.add("hide");
    clearTimeout(closeButtonTimeout);
    closeButtonTimeout = setTimeout(() => {
      closeButton.classList.add("show");
    }, 300);
  });

  // Button to collapse the section
  closeButton.addEventListener("click", function () {
    leftSection.classList.remove("open");
    leftSection.classList.add("collapsed");
    closeButton.classList.remove("show");
    toggleButton.classList.remove("hide");
  });

  // JSON Data
  const taskData = {
    task_id: 18882,
    task_title: "Explore the world of management",
    task_description:
      "As a project manager, you play an important role in leading a project through initiation, planning, execution, monitoring, controlling and completion. How? Do you want to manage each and every step of your life?",
    status: "notworkyet",
    assets: [
      {
        asset_id: 18883,
        asset_title: "Technical Project Management",
        asset_description:
          "Story of Alignment\r\nScope of Agility\r\nSpecific Accountable \r\nStaggering Approach\r\n\r\n",
        asset_content: "https://www.youtube.com/embed/TiMRwri1xJ8",
        asset_type: "display_asset",
        asset_content_type: "video",
      },
      {
        asset_id: 18884,
        asset_title: "Threadbuild",
        asset_description:
          "Watch the video and thread build, and jot out key threads while watching that video.",
        asset_content: " ",
        asset_type: "input_asset",
        asset_content_type: "threadbuilder",
      },
      {
        asset_id: 18885,
        asset_title: "Structure your pointers",
        asset_description:
          "Write a 400-500 word article, from your thread. Publish your understanding, and showcase your learning to the entire world.",
        asset_content: " ",
        asset_type: "input_asset",
        asset_content_type: "article",
      },
      {
        asset_id: 18886,
        asset_title: "4SA Method",
        asset_description: "To explore more, read more",
        asset_content:
          "https://dtthon.deepthought.education/sharer?id=01aa3cff-db8e-8d9d-afc0-1671715937878",
        asset_type: "display_asset",
        asset_content_type: "article",
      },
    ],
  };

  // Create an asset container
  function createAssetContainer(asset) {
    const assetContainer = document.createElement("div");
    assetContainer.className = "asset-container";

    // Add asset title
    const assetTitle = document.createElement("h4");
    assetTitle.textContent = asset.asset_title;
    assetContainer.appendChild(assetTitle);

    // Add asset description
    const assetDescription = document.createElement("p");
    assetDescription.textContent = asset.asset_description;
    assetContainer.appendChild(assetDescription);

    // Render based on asset type
    if (asset.asset_content_type === "video") {
      const video = document.createElement("iframe");
      video.src = asset.asset_content.trim();
      video.width = "480";
      video.height = "291";
      video.frameBorder = "0";
      video.allow =
        "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
      video.allowFullscreen = true;
      assetContainer.appendChild(video);
    } else if (
      asset.asset_content_type === "article" &&
      asset.asset_content.trim() !== ""
    ) {
      const link = document.createElement("a");
      link.href = asset.asset_content.trim();
      link.textContent = "Read more";
      link.target = "_blank";
      assetContainer.appendChild(link);
    }

    return assetContainer;
  }

  // Render the task and its assets
  function renderTaskAndAssets() {
    const container = document.querySelector(".main");

    // Create a task container
    const taskContainer = document.createElement("div");
    taskContainer.className = "task-container";

    // Add task title
    const taskTitle = document.createElement("h3");
    taskTitle.textContent = taskData.task_title;
    taskContainer.appendChild(taskTitle);

    // Add task description
    const taskDescription = document.createElement("p");
    taskDescription.textContent = taskData.task_description;
    taskContainer.appendChild(taskDescription);

    // Loop through each asset and use the reusable function
    taskData.assets.forEach((asset) => {
      const assetElement = createAssetContainer(asset);
      taskContainer.appendChild(assetElement);
    });

    // Append the task to the main container
    container.appendChild(taskContainer);
  }

  // Call the function to render the task and assets
  renderTaskAndAssets();
});
