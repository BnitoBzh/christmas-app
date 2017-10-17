export default function() {
  this.get('/lists');
  this.get('/lists/:id');
  this.post('/lists');
  this.patch('/lists/:id');
  this.del('/lists/:id');
  this.post('/gifts');
  this.patch('/gifts/:id');
}
