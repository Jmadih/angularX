'use strict';

var _ = require('underscore');
var INTRODUCTIONS = require('./data/introductions').introductions;
var SKILLS = require('./data/skills').skills;


exports.getIntros = function (req, res) {
    console.log('List introductions');
    return res.status(200).json(INTRODUCTIONS);
}

exports.getIntro = function (req, res) {
  var id = getId(req);
  console.log("Get introduction: id = "+ id);
  var index = _.findIndex(INTRODUCTIONS, function (p) {
    return p.id === +id;
  });
  if (index === -1) {
    return res.status(404).json({error: 'The introduction with id "' + id + '" doesn\'t exist.'});
  }
  return res.status(200).json(INTRODUCTIONS[index]);
}

exports.updateIntro = function (req, res) {
  var id = getId(req);
  console.log("Update introduction: id = "+ id);
  var introduction = req.body;
  var index = _.findIndex(INTRODUCTIONS, function (p) {
    return p._id === id;
  });
  if (index === -1) {
    return res.status(404).json({error: 'The introduction with id "' + id + '" doesn\'t exist.'});
  }
  var oldIntroduction = INTRODUCTIONS[index];
  for(var prop in introduction) {
    oldIntroduction[prop] = introduction[prop]
  }
  INTRODUCTIONS[index] = oldIntroduction;
  return res.status(200).json(INTRODUCTIONS);
}

exports.getSkills = function (req, res) {
    console.log("List skills");
    return res.status(200).json(SKILLS);
}

exports.updateSkill = function (req, res) {
    var id = getId(req);
    console.log("Update skill: id = "+ id);
    var skill = req.body;
    var index = _.findIndex(SKILLS, function (p) {
        return p._id === id;
    });
    if (index === -1) {
        return res.status(404).json({error: 'The Skill with id "' + id + '" doesn\'t exist.'});
    }
    var oldSkill = SKILLS[index];
    for(var prop in skill) {
        oldSkill[prop] = skill[prop]
    }
    SKILLS[index] = oldSkill;
    return res.status(200).json(SKILLS);
}

exports.addSkill = function (req, res) {
    var exp = req.body;
    exp._id = createId();
    var size = SKILLS.length;
    SKILLS[size] = exp;
    return res.status(200).json(SKILLS);
}

exports.deleteSkill = function (req, res) {
    var id = getId(req);
    console.log('Delete skill : id=' + id);

    var index = _.findIndex(SKILLS, function (p) {
        return p._id === id;
    });

    if (index === -1) {
        return res.status(404).json({error: 'The skill with id "' + id + '" doesn\'t exist.'});
    }

    SKILLS.splice(index, 1);
    return res.status(200).json(SKILLS);
}

function getParam(req, param) {
  return req.params[param];
}

function getId(req) {
    var param = getParam(req, 'id');
    return param;
}

function createId() {
    return new Date().getTime()+"";
}
