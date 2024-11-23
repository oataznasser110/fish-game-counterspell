const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.TiledBg,
		C3.Plugins.Sprite,
		C3.Behaviors.TileMovement,
		C3.Behaviors.EightDir,
		C3.Behaviors.shadowcaster,
		C3.Behaviors.Sin,
		C3.Plugins.Text,
		C3.Plugins.Touch,
		C3.Plugins.Audio,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.Audio.Acts.Play,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.System.Acts.Wait,
		C3.Plugins.System.Acts.ResetGlobals,
		C3.Plugins.System.Acts.RestartLayout,
		C3.Plugins.System.Cnds.OnLayoutStart
	];
};
self.C3_JsPropNameTable = [
	{TiledBackground: 0},
	{TileMovement: 0},
	{"8Direction": 0},
	{Mazen: 0},
	{ShadowCaster: 0},
	{Sine: 0},
	{AHMED: 0},
	{Sprite3: 0},
	{Sprite4: 0},
	{Text: 0},
	{moataz: 0},
	{Sprite: 0},
	{Sprite2: 0},
	{mm: 0},
	{Sprite5: 0},
	{k: 0},
	{Sprite6: 0},
	{Touch: 0},
	{Audio: 0},
	{fisheaten: 0}
];

self.InstanceType = {
	TiledBackground: class extends self.ITiledBackgroundInstance {},
	Mazen: class extends self.ISpriteInstance {},
	AHMED: class extends self.ISpriteInstance {},
	Sprite3: class extends self.ISpriteInstance {},
	Sprite4: class extends self.ISpriteInstance {},
	Text: class extends self.ITextInstance {},
	moataz: class extends self.ISpriteInstance {},
	Sprite: class extends self.ISpriteInstance {},
	Sprite2: class extends self.ISpriteInstance {},
	mm: class extends self.ISpriteInstance {},
	Sprite5: class extends self.ISpriteInstance {},
	k: class extends self.ISpriteInstance {},
	Sprite6: class extends self.ISpriteInstance {},
	Touch: class extends self.IInstance {},
	Audio: class extends self.IInstance {}
}