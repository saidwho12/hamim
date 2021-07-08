﻿NDSummary.OnToolTipsLoaded("File:hz.c",{13:"<div class=\"NDToolTip TInformation LC\"><div class=\"TTSummary\">This file is licensed under MIT.</div></div>",25:"<div class=\"NDToolTip TStruct LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype25\"><div class=\"CPEntry TStruct Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">typedef</span> <span class=\"SHKeyword\">struct</span></div><div class=\"CPName\">hz_bump_allocator_t</div></div></div><div class=\"TTSummary\">A bump allocator, meant to be used on a temporary stack buffer.&nbsp; The blocks are allocated and stored on the multiple of their size rounded to a power of two.&nbsp; Another name for this is &quot;monotonic allocator&quot;.</div></div>",23:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype23\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\">HZ_INLINE <span class=\"SHKeyword\">void</span> * hz_bump_allocator_alloc(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">hz_bump_allocator_t&nbsp;</td><td class=\"PSymbols\">*</td><td class=\"PName last\">a,</td></tr><tr><td class=\"PType first\">size_t&nbsp;</td><td></td><td class=\"PName last\">size</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Allocates new block of memory, and pushes pointer forward.&nbsp; Blocks are allocated on the multiple of the size rounded up to the next power of two.</div></div>",31:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype31\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\">HZ_INLINE <span class=\"SHKeyword\">void</span> hz_bump_allocator_free(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">hz_bump_allocator_t&nbsp;</td><td class=\"PSymbols\">*</td><td class=\"PName last\">a,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">void</span>&nbsp;</td><td class=\"PSymbols\">*</td><td class=\"PName last\">p</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Frees a previously allocated block. (currently a no-op)</div></div>",32:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype32\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\">HZ_INLINE <span class=\"SHKeyword\">void</span> hz_bump_allocator_release(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">hz_bump_allocator_t&nbsp;</td><td class=\"PSymbols\">*</td><td class=\"PName last\">a</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Releases all resources held by the allocator. (currently a no-op)</div></div>",33:"<div class=\"NDToolTip TStruct LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype33\"><div class=\"CPEntry TStruct Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">typedef</span> <span class=\"SHKeyword\">struct</span></div><div class=\"CPName\">hz_byte_stream_t</div></div></div><div class=\"TTSummary\">A struct to store a buffer.&nbsp; This is also used to handle reading bytes sequentially.&nbsp; Unpacks in network-order (big endian).</div></div>",14:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype14\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\">HZ_INLINE hz_byte_stream_t hz_byte_stream_create(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">u8&nbsp;</td><td class=\"PSymbols\">*</td><td class=\"PName last\">data,</td></tr><tr><td class=\"PType first\">size_t&nbsp;</td><td></td><td class=\"PName last\">size</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Creates a byte stream, holds data and a bump pointer allowing seeking, unpacking various primitives from memory.</div></div>",35:"<div class=\"NDToolTip TStruct LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype35\"><div class=\"CPEntry TStruct Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">typedef</span> <span class=\"SHKeyword\">struct</span></div><div class=\"CPName\">hz_shape_call_cache_t</div></div></div><div class=\"TTSummary\">Holds the cache of all OpenType lookups required in a call to hz_shape.</div></div>"});