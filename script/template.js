function generate_paras(num, sentence_min, sentence_max, tag){
    let words = "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum".toLowerCase().split(" ");
    let str = "", i = 0, j = 0;

    while (i < num){
        str += `<${tag}>`; 
        j = 0; while (j < irandom_range(sentence_min, sentence_max)){
        str += words[irandom_range(0,words.length)] + " ";
        j++;
        }
        str += `</${tag[0]}>`;
        i++;
    }

    return str;
}

id("content").innerHTML        = generate_paras(20, 30, 200, "p");
id("nav-secondary").innerHTML += generate_paras(10, 1, 3, "a href=''"); 