#!/usr/bin/env python3

from recommonmark.transform import AutoStructify
from recommonmark.parser import CommonMarkParser

author = 'Jam Risser'

copyright = '2018, Jam Risser'

exclude_patterns = []

extensions = [
    'sphinx.ext.mathjax',
    'sphinx_js'
]

html_static_path = ['_static']

html_theme = 'sphinx_rtd_theme'

htmlhelp_basename = 'generator_github_projectdoc'

js_source_path = '../src'

language = None

master_doc = 'index'

latex_documents = [(
    master_doc,
    'generator_github_project.tex',
    'Generator Github Project Documentation',
    'Jam Risser',
    'manual'
)]

latex_elements = {
    'papersize': 'letterpaper',
    'pointsize': '10pt',
    'preamble': '',
    'figure_align': 'htbp'
}

man_pages = [(
    master_doc,
    'generator_github_project',
    'Generator Github Project Documentation',
    [author],
    1
)]

needs_sphinx = '1.0'

primary_domain = 'js'

project = 'generator-github-project'

pygments_style = 'sphinx'

release = '0.1.7'

source_parsers = {
    '.md': CommonMarkParser
}

source_suffix = ['.rst', '.md']

templates_path = ['_templates']

texinfo_documents = [(
    master_doc,
    'generator-github-project',
    'Generator Github Project Documentation',
    author,
    'generator_github_project',
    'Yeoman generator for GitHub projects',
    'Miscellaneous'
)]

todo_include_todos = False

version = '0.1.7'

def setup(app):
    app.add_config_value('recommonmark_config', {
        'auto_toc_tree_section': 'Content',
        'enable_auto_doc_ref': True,
        'enable_auto_toc_tree': True,
        'enable_eval_rst': True,
        'enable_inline_math': True,
        'enable_math': True
    }, True)
    app.add_stylesheet('styles/main.css')
    app.add_javascript('scripts/main.js')
    app.add_transform(AutoStructify)
