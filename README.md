# docs.o3.network
O3 Documentation Site

## How to write articles
To contribute new articles to the documentation you can pull down the repo, and add/edit a markdown file.

### Clone the repo

```
git clone git@github.com:O3Labs/o3-docs.git
```

### Adding/Editing a new file

All documents can be found in the `docs` folder in the root of this repo:

https://github.com/O3Labs/o3-docs/tree/master/docs

You can update one of the existing `.md` files, or add a new file. If you add a new file, be sure to add it to the `sidebars.json`. This file will place your new document into the outline of documents.

https://github.com/O3Labs/o3-docs/blob/master/website/sidebars.json

#### Including Images in your Markdown

All image files should be placed into the following main folder. If you are making a new tutorial, please make a new subfolder for all images related to that tutorial.

https://github.com/O3Labs/o3-docs/tree/master/website/static/img

Once the images are in this folder, they can be referenced in your markdown file using:

```
![](/img/<sub_folder>/<image_name>.png)
```

For an example, please see the Ont Stake Tutorial:
https://raw.githubusercontent.com/O3Labs/o3-docs/master/docs/ontStake.md

### Viewing a file while editing

After adding your new document to the `sidebars.json`, you can run the website locally.

Navigate to the `website` folder:
```
cd website
```

Install dependencies
```
yarn install
```

Run the site
```
yarn start
```

A new browser window should pop up at `http://localhost:3000`, with the site loaded. From now on, any changes that you save into your markdown file will be automatically updated on the local version of the site.

### Publishing
Once you are done, commit your changes to a new branch, and submit a PR to the main repo. Once merged in, the automated scripts will handle updating the live site with your changes.
