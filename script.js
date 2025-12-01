// 인스타그램 이미지 로드
async function loadInstagram() {
  const container = document.querySelector(".portfolio-grid");

  try {
    const res = await fetch("https://www.instagram.com/lusse_archive/?__a=1&__d=dis");
    const data = await res.json();

    const posts = data.graphql.user.edge_owner_to_timeline_media.edges;

    posts.slice(0, 12).forEach(post => {
      const imgUrl = post.node.thumbnail_src;

      const div = document.createElement("div");
      div.classList.add("portfolio-item");
      div.innerHTML = `<img src="${imgUrl}" alt="lusse design portfolio">`;

      container.appendChild(div);
    });
  } catch (e) {
    console.log("Instagram fetch blocked. Using fallback.");
    container.innerHTML = "<p style='text-align:center;'>사진을 불러올 수 없습니다.</p>";
  }
}

loadInstagram();
