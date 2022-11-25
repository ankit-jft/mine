var likes = document.querySelectorAll('.likeImage');
        let para = document.querySelectorAll('.output');
        let val = new Array(likes.length).fill(0);
        console.log(likes)
        for (let i = 0; i < likes.length; i++) {
            likes[i].addEventListener('click', () => {
                console.log(i);
                val[i]++;
                para[i].innerText = val[i];

            })

        }