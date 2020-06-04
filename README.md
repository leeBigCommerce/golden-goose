# golden-goose
An experiment in testing, BDD and separating concerns

## Rough Idea

### A mini website with standard requirements:

#### Users can do whatever the site's offering is

Whatever the site, human beings have come to it for a reason. If we don't fulfill that need, they will go elsewhere. They will feel misled, we will feel sad and possibly even go bankrupt.

#### The site looks like it should

It's a visual world - a site's ability to fulfill user needs can be greatly affected by its aesthetics.

### It has to do all the above consistently while constantly evolving

---

## Rough TODO list

-  ~~Set up basic repo etiquette with 'standard-version' and 'commitlint'~~
-  ~~Set up a mono repo in anticipation that sections of our code will want loose coupling~~
- Prove out mono repo structure (not sure lerna and/or workspaces are set up correctly)
- Create a set of business requirements (possibly in Cucumber), possibly ranked/grouped by criticality
- Set up a test runner that qualifies those requirements (possibly Cypress)
- Create a (possibly mock) CI flow which uses the above tests as a gate to deployment (possibly with some less critical running post for speed reasons)
- Begin writing code to get those tests to pass
- Add better styling
- Add visual regression testing to the CI flow
- Revisit code to see what (if any) promises haven't been covered by our Business Requirement test
