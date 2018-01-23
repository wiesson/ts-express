FROM node:8.9.4-alpine
ENV NODE_ENV production
ENV PORT 2015

WORKDIR /usr/share/app
COPY dist/ dist

# Expose ports
EXPOSE 5000 27017

CMD ["node", "/usr/share/app/dist/index.js"]
