import os
import shutil
from markdown2 import markdown
from jinja2 import Environment, FileSystemLoader
from json import load

template_env = Environment(loader=FileSystemLoader(searchpath='./'))
template = template_env.get_template('layout.html')

pages = os.listdir('content') 
# get a nice list of our files. what a convenient function!

for page in pages:

    if page.endswith('.md'): 
        # if we find a markdown file then it's time to build a page

        page = page.replace('.md','')
        # cutting out the file extension

        with open('content/' + page + '.md') as markdown_file:

            content = markdown(
                markdown_file.read(),
                extras=['fenced-code-blocks', 'code-friendly']
            )

        with open ('content/' + page + '.json') as config_file:
            #load metadata from the corresponding json

            config = load(config_file)

        with open(page + '.html', 'w') as output_file: 
            #then we build the html file

            output_file.write(
            template.render(
                title = config['title'],
                content = content
                )
            ) 