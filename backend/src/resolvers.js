const Cat = require("./models/Cat");
const Post = require("./models/Posts");

const resolvers = {
    Query: {
      hello: () => "hi",
      cats: async () => await Cat.find({}),
      getAll: async () => await Post.find({})

    },
    Mutation: {
      createCat: async (_, { name , color }) => {
        const kitty = new Cat({ name ,color });
        await kitty.save();
        return kitty;
      } ,

      createPost : async (_, { title , description }) => {
        const newPost = new Post({  title , description });
        await newPost.save();
        return newPost;
      } ,

      updatePost : async (_, { id , title , description }) => {
        const post = await Post.findById(id);
        post.title = title || post.title;
        post.description = description || post.description;

        await post.save();
        return post;
      } ,

      deletePost: async (parent, args, context, info) => {
          console.log('hitted');
        const { id } = args;
        await Post.findByIdAndDelete(id);
        return "Deleted";
      },


  
    }
  };

module.exports = resolvers;
