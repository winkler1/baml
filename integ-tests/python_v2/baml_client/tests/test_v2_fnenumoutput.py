# This file is generated by the BAML compiler.
# Do not edit this file directly.
# Instead, edit the BAML files and recompile.

# ruff: noqa: E501,F401
# flake8: noqa: E501,F401
# pylint: disable=unused-import,line-too-long
# fmt: off

from ..__do_not_import.generated_baml_client import baml
from ..baml_types import EnumOutput2, IV2_FnEnumOutput, IV2_FnEnumOutputStream
from baml_lib._impl.deserializer import Deserializer
from json import dumps
from pytest_baml.ipc_channel import BaseIPCChannel
from typing import Any


@baml.V2_FnEnumOutput.test(stream=True)
async def test_dependent_tomato(V2_FnEnumOutputImpl: IV2_FnEnumOutputStream, baml_ipc_channel: BaseIPCChannel):
    def to_str(item: Any) -> str:
        if isinstance(item, str):
            return item
        return dumps(item)

    case = {""input"": "noop", }
    deserializer_input = Deserializer[str](str) # type: ignore
    input = deserializer_input.from_string(to_str(case["input"]))
    async with V2_FnEnumOutputImpl(
        input=input
    ) as stream:
        async for response in stream.parsed_stream:
            baml_ipc_channel.send("partial_response", response.json())

        await stream.get_final_response()
@baml.V2_FnEnumOutput.test(stream=True)
async def test_open_bronze(V2_FnEnumOutputImpl: IV2_FnEnumOutputStream, baml_ipc_channel: BaseIPCChannel):
    def to_str(item: Any) -> str:
        if isinstance(item, str):
            return item
        return dumps(item)

    case = {""input"": "pick the first one", }
    deserializer_input = Deserializer[str](str) # type: ignore
    input = deserializer_input.from_string(to_str(case["input"]))
    async with V2_FnEnumOutputImpl(
        input=input
    ) as stream:
        async for response in stream.parsed_stream:
            baml_ipc_channel.send("partial_response", response.json())

        await stream.get_final_response()
@baml.V2_FnEnumOutput.test(stream=True)
async def test_zestful_lavender(V2_FnEnumOutputImpl: IV2_FnEnumOutputStream, baml_ipc_channel: BaseIPCChannel):
    def to_str(item: Any) -> str:
        if isinstance(item, str):
            return item
        return dumps(item)

    case = {""input"": "pick the last one", }
    deserializer_input = Deserializer[str](str) # type: ignore
    input = deserializer_input.from_string(to_str(case["input"]))
    async with V2_FnEnumOutputImpl(
        input=input
    ) as stream:
        async for response in stream.parsed_stream:
            baml_ipc_channel.send("partial_response", response.json())

        await stream.get_final_response()